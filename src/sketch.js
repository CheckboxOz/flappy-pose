let bird
let pipes = []

function setup() {
  createCanvas(640, 480)
  bird = new Bird()
  pipes.push(new Pipe())
}

function draw() {
  background(0)

  // Loop through each pipe
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update()

    // Delete when offscreen
    if (pipes[i].isOffscreen()) {
      pipes.splice(i, 1)
    }
  }

  // Create a new pipe
  if (frameCount % 75 == 0) {
    pipes.push(new Pipe())
  }

  bird.update()
}

function keyPressed() {
  if (key === ' ') {
    bird.flap()
  }
}
