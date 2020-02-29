let bird
let pipes = []
let isGameOver = false
let birdImg

function preload() {
  birdImg = loadImage('img/grumpy-bird.png')
}

function setup() {
  createCanvas(640, 480)
  bird = new Bird()
  pipes.push(new Pipe())
}

function draw() {
  background('#70c5ce')

  // Loop through each pipe
  for (let i = pipes.length - 1; i >= 0; i--) {
    if (isGameOver) {
      pipes[i].draw()
    } else {
      pipes[i].update()
    }

    // Delete when offscreen
    if (pipes[i].isOffscreen()) {
      pipes.splice(i, 1)
    }
  }

  // Create a new pipe
  if (frameCount % 75 === 0 && !isGameOver) {
    pipes.push(new Pipe())
  }

  if (isGameOver) {
    bird.draw()
  } else {
    bird.update()
  }
}

function keyPressed() {
  if (key === ' ') {
    bird.flap()
  }
}
