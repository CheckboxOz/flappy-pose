class Pipe {
  constructor() {
    this.spacing = 200
    this.top = random(height / 6, (3 / 4) * height)
    this.bottom = height - (this.top + this.spacing)
    this.x = width
    this.width = 80
    this.speed = 6

    this.highlight = false
  }

  draw() {
    if (this.highlight) {
      fill(255, 0, 0)
      console.log('hit')
    } else {
      fill(255)
    }

    rect(this.x, 0, this.width, this.top)
    rect(this.x, height - this.bottom, this.width, this.bottom)
  }

  update() {
    this.x -= this.speed

    this.highlight = false
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.width) {
        this.highlight = true
      }
    }

    this.draw()
  }

  isOffscreen() {
    if (this.x < -this.width) {
      return true
    } else {
      return false
    }
  }
}
