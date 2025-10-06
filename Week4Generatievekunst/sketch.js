// Basis klasse voor vormen
class Figure {
  constructor() {
    this.x = random(width)
    this.y = random(height)
    this.dx = random(-5, 5)
    this.dy = random(-5, 5)
    this.rgba = [random(255), random(255), random(255), random(255)]
    this.size = random(10, 50)
  }

  move() {
    this.x += this.dx
    this.y += this.dy
  }
  tekendezevorm() { }
}

class Circle extends Figure {
  constructor() {
    super()
    this.prevPositions = []
  }
// Tekent de vorm en de vorige posities met vervagend effect
tekendezevorm() {
  fill(this.rgba[0], this.rgba[1], this.rgba[2], this.rgba[3])
  circle(this.x, this.y, this.size)
// Vervagend effect voor vorige posities
  for (let i = 0; i < this.prevPositions.length; i++) {
    let alpha = map(i, 0, this.prevPositions.length, 0, this.rgba[3])
    fill(this.rgba[0], this.rgba[1], this.rgba[2], alpha)
    circle(this.prevPositions[i][0], this.prevPositions[i][1], this.size)
  }
// Opslaan van huidige positie
  this.prevPositions.push([this.x, this.y])
  if (this.prevPositions.length > 10) {
    this.prevPositions.shift();
  }
}

}
class Rectangle extends Figure {
  constructor() {
    super()
    this.prevPositions = []
  }
// Tekent de vorm en de vorige posities met vervagend effect
tekendezevorm() {
  fill(this.rgba[0], this.rgba[1], this.rgba[2], this.rgba[3])
  rect(this.x, this.y, this.size)
// Vervagend effect voor vorige posities
  for (let i = 0; i < this.prevPositions.length; i++) {
    let alpha = map(i, 0, this.prevPositions.length, 0, this.rgba[3])
    fill(this.rgba[0], this.rgba[1], this.rgba[2], alpha)
    rect(this.prevPositions[i][0], this.prevPositions[i][1], this.size)
  }
// Opslaan van huidige positie
  this.prevPositions.push([this.x, this.y])
  if (this.prevPositions.length > 10) {
    this.prevPositions.shift();
  }
}

}
class Triangle extends Figure {
  // Uitgebreide constructor voor driehoek met drie hoekpunten
  constructor() {
    super()
    this.x2 = this.x + random(-50, 50)
    this.y2 = this.y + random(-50, 50)
    this.x3 = this.x + random(-50, 50)
    this.y3 = this.y + random(-50, 50)
    this.prevPositions = []
  }
  move() {
    super.move()
    this.x2 += this.dx
    this.y2 += this.dy
    this.x3 += this.dx
    this.y3 += this.dy
  }
  // Tekent de vorm en de vorige posities met vervagend effect
tekendezevorm() {
  fill(this.rgba[0], this.rgba[1], this.rgba[2], this.rgba[3])
  triangle(this.x, this.y, this.x2, this.y2, this.x3, this.y3)
// Vervagend effect voor vorige posities
  for (let i = 0; i < this.prevPositions.length; i++) {
    let alpha = map(i, 0, this.prevPositions.length, 0, this.rgba[3])
    let pos = this.prevPositions[i]
    fill(this.rgba[0], this.rgba[1], this.rgba[2], alpha)
    triangle(pos[0], pos[1], pos[2], pos[3], pos[4], pos[5])
  }
  // Opslaan van huidige positie
  this.prevPositions.push([this.x, this.y, this.x2, this.y2, this.x3, this.y3])
  if (this.prevPositions.length > 10) {
    this.prevPositions.shift()
  }
}

}
// Setup functie
function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  generate(0.1)
} 
let shapes = []
// Animatie loop
function draw() {
  background(20, 20, 30)
  // Loop door alle vormen
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.tekendezevorm();
    shape.move();
    if (shape instanceof Triangle) {
      if (shape.x < 0 || shape.x2 < 0 || shape.x3 < 0 ||
        shape.x > width || shape.x2 > width || shape.x3 > width) {
        shape.dx *= -1;
      }
      if (shape.y < 0 || shape.y2 < 0 || shape.y3 < 0 ||
        shape.y > height || shape.y2 > height || shape.y3 > height) {
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
    // Transparantie en verandering van richting
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
    generate
  }
}
// Nieuwe vormen genereren bij indrukken van toetsen
function generate(times) {
  let count = round(random(50, 100)) * times
  shapes = []
  background(20, 20, 30)
  for (let i = 0; i < count; i++) {
    shapes.push(new Circle());
    shapes.push(new Rectangle())
    shapes.push(new Triangle())
    console.log(count)
  }
}
// Toetsenbord interactie
function keyPressed() {
  if (keyCode === ENTER) {
    generate(1)
  }
  if (keyCode === BACKSPACE) {
    generate(2)
  }
  if (keyCode === 32) {
    generate(3)
  }
}