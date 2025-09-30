let x = []; // массив для координат X
let y = []; // массив для координат Y
let dx = []; // массив скоростей по X
let dy = []; // массив скоростей по Y
let size = []; // размеры кругов
let col = []; // цвета кругов

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  generateArt(); // создаём первый набор кругов
}

function draw() {
  background(20, 20, 30, 80); // прозрачный фон (следы остаются)

  // перебираем все круги и рисуем их
  for (let i = 0; i < x.length; i++) {
    // движение
    x[i] += dx[i];
    y[i] += dy[i];

    // отражение от краёв
    if (x[i] < 0 || x[i] > width) dx[i] *= -1;
    if (y[i] < 0 || y[i] > height) dy[i] *= -1;

    // рисуем круг
    fill(col[i]);
    ellipse(x[i], y[i], size[i]);
  }
}

// создаём новые случайные круги
function generateArt() {
  let count = int(random(10, 30)); // количество кругов
  x = [];
  y = [];
  dx = [];
  dy = [];
  size = [];
  col = [];

  for (let i = 0; i < count; i++) {
    x.push(random(width));      // случайная позиция X
    y.push(random(height));     // случайная позиция Y
    dx.push(random(-2, 2));     // случайная скорость по X
    dy.push(random(-2, 2));     // случайная скорость по Y
    size.push(random(20, 100)); // случайный размер
    col.push(color(random(255), random(255), random(255), 150)); // случайный цвет
  }
}

// при нажатии Backspace — новая генерация
function keyPressed() {
  if (keyCode === BACKSPACE) {
    generateArt();
  }
}
