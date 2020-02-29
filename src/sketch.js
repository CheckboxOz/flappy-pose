let score = 0
let $score = document.querySelector('#score')
let bird
let pipes = []
let isGameOver = false
let birdImg
let isCountingDown = false
let gameOverCountdown = 0
let $message = document.querySelector('#message')
let posenet
let video

function preload() {
  birdImg = loadImage('img/grumpy-bird.png')
}

function setup() {
  let canvas = createCanvas(640, 480)
  canvas.parent('sketch-container')
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

  // Handle gameover restart
  if (isGameOver && !isCountingDown) {
    isCountingDown = true

    // Don't @ me
    // $message.innerHTML = 'Restarting in 3...'
    // setTimeout(() => {
    //   $message.innerHTML = 'Restarting in 2...'
    // setTimeout(() => {
    // $message.innerHTML = 'Restarting in 1...'

    setTimeout(() => {
      $message.innerHTML = ''
      pipes = []
      bird.y = height / 2
      isCountingDown = false
      isGameOver = false
      score = 0
      $score.innerHTML = '0'
    }, 1000)
    //   }, 1000)
    // }, 1000)
  }
}
