function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (keyIsDown(32)) {
    for (let i = 0; i < 100; i++) {
      let x = random(100, 900);
      let y = random(100, 900);
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      let h = random(10, 100);
      let alpha = random(100, 255);
      fill(r, g, b, alpha);
      if (random() < 0.5) {
        circle(x, y, h);
      } else {
        rect(x, y, h, h);
      }
    }
  }
}
