class Circle{
  constructor(){
    this.x= random(width)
    this.y = random(height)
    this.dx = random(-1,5)
    this.dy= random(-1,5)
    this.rgba = [random(255),random(255),random(255), random(255)]
    this.size = random(10,50)
  }
  move() {
    this.x += this.dx
    this.y += this.dy
  }
  tekendezevorm() {
    fill(this.rgba)
    circle(this.x, this.y, this.size)
  }
}
class Rectangle{
  constructor(){
    this.x= random(width)
    this.y = random(height)
    this.dx = random(-1,5)
    this.dy= random(-1,5)
    this.rgba = [random(255),random(255),random(255), random(255)]
    this.size = random(10,50)
  }
    move() {
    this.x += this.dx
    this.y += this.dy
  }
    tekendezevorm() {
    fill(this.rgba)
    rect(this.x, this.y, this.size)
  }
}
class Triangle{
  constructor(){
    this.x1=random(width)
    this.y1=random(height)
    this.x2=this.x1+random(-50,50)
    this.y2=this.y1+random(-50,50)
    this.x3=this.x1+random(-50,50)
    this.y3=this.y1+random(-50,50)
    this.dx= random(-1,5)
    this.dy= random(-1,5)
    this.rgba = [random(255),random(255),random(255), random(255)]
  }
  move() {
    this.x1 += this.dx
    this.y1 += this.dy
    this.x2 += this.dx
    this.y2 += this.dy
    this.x3 += this.dx
    this.y3 += this.dy
  }
    tekendezevorm() {
    fill(this.rgba)
    triangle(this.x1, this.y1, this.x2, this.y2,this.x3,this.y3)
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  generate(1)
}
  let shapes = []
function draw() {
  background(20, 20, 30,40);
for (let i = 0; i < shapes.length; i++) {
  let shape = shapes[i];
  shape.tekendezevorm();
  shape.move();

  if (shape instanceof Triangle) {
    if (shape.x1 < 0 || shape.x2 < 0 || shape.x3 < 0 || 
        shape.x1 > width || shape.x2 > width || shape.x3 > width) {
      shape.dx *= -1;
    }
    if (shape.y1 < 0 || shape.y2 < 0 || shape.y3 < 0 || 
        shape.y1 > height || shape.y2 > height || shape.y3 > height) {
      shape.dy *= -1;
    }
  } else {
    if (shape.x < 0 || shape.x + shape.size > width) {
      shape.dx *= -1;
    }
    if (shape.y < 0 || shape.y + shape.size > height) {
      shape.dy *= -1;
    }
  }

  if (shape.rgba[3] < 400) {
    shape.rgba[3]++;
  } else {
    shape.rgba[3] = -100;
    let r = round(random(1, 6));
    if (r == 1) {
      shape.dx *= -1;
    } else if (r == 2) {
      shape.dy *= -1;
    } else if (r == 3) {
      shape.dx *= -0.8;
    } else if (r == 4) {
      shape.dy *= -0.8;
    } else if (r == 5) {
      shape.dx *= -1.2;
    } else if (r == 6) {
      shape.dy *= -1.2;
    }
  }
}

}
function generate(times){
  let count = round(random(50,100))*times
  shapes =[]
  background(20, 20, 30)
  for (let i = 0; i<count;i++){
    shapes.push(new Circle());
    shapes.push(new Rectangle())
    shapes.push(new Triangle())
    console.log(count)
  }
}
function keyPressed() {
  if (keyCode === ENTER) {
    generate(1)
  }
  if (keyCode === BACKSPACE){
    generate(2)
  }
  if (keyCode === 32){
    generate(3)
  }
}