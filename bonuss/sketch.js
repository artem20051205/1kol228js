let mouse_p = 0;
let size = 20;
let circlex = -100;
let circley = -10;
let color1 = 0;
let color2 = 0;
let color3 = 0;
let total = 0;
let nummer = 0;
let addedToTotal = false;
function setup() {
  createCanvas(1000, 1000);
}
function draw() {
  background(color2,color1,color3);
  fill(255);
  textSize(32);
  text("sound: " + total +'%', 50, 50);
  fill(color1, color2, color3);
  textSize(42);
  if (mouse_p == 1) {
    circlex = mouseX;
    circley = mouseY;
    circle(mouseX, mouseY, size);
    nummer = round(random(0, 100));
    addedToTotal = false;

    if (size <= 600) {
      fill(0);
      if (color1 > 127) {
        text('+🔊', circlex - 10, circley);
        text(nummer, circlex, circley + 30);
      } else {
        text('-🔊', circlex - 10, circley);
        text(nummer, circlex, circley + 30);
      }
      size += 2;
    }
  } else {
    circle(circlex, circley, size);
    fill(0);
    if (color1 > 127) {
      text('+🔊', circlex - 10, circley);
      text(nummer, circlex, circley + 30);
    } else {
      text('-🔊', circlex - 10, circley);
        text(nummer, circlex, circley + 30);
    }

    if (circley <= height - size / 2) {
      circley += 6;
    } else {
      circley += 1;
    }
  }

  if (addedToTotal == false && circley - size / 2 > height && mouse_p == 0) {
    if (color1 > 127) {
      total += nummer;
    } else {
      total -= nummer;
    }
    total = constrain(total, 0, 100);
    addedToTotal = true;
  }
}
function mousePressed() {
  size = 0;
  mouse_p = 1;
  color1 = round(random(1, 255));
  color2 = round(random(1, 255));
  color3 = round(random(1, 255));
}
function mouseReleased() {
  mouse_p = 0;
}
