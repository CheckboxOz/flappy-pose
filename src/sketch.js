function setup() {
  createCanvas(640, 480)
  bird = new Bird()
}

function draw() {
  background(0)

  bird.update()
}

function keyPressed() {
  if (key === ' ') {
    bird.flap()
  }
}
