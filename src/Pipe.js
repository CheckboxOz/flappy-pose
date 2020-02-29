let pipeBorderWidth = 2

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
    // Draw pipes
    strokeWeight(3)

    // Top pipe
    stroke('#543847')
    fill('#73bf2e')
    rect(this.x, -pipeBorderWidth, this.width, this.top)
    fill('#9ce659')
    noStroke()
    rect(this.x + pipeBorderWidth, -pipeBorderWidth, this.width / 3, this.top - 3)
    stroke('#73bf2e')
    line(this.x + 10, -pipeBorderWidth, this.x + 10, this.top - 3)
    fill('#558022')
    noStroke()
    rect(this.x + this.width - 20, -pipeBorderWidth, this.width / 3 - 10, this.top - 3)

    // Bottom pipe
    stroke('#543847')
    fill('#73bf2e')
    rect(this.x, height - this.bottom + pipeBorderWidth, this.width, this.bottom + pipeBorderWidth)
    fill('#9ce659')
    noStroke()
    rect(this.x + pipeBorderWidth, height - this.bottom + 4, this.width / 3, this.bottom + pipeBorderWidth)
    stroke('#73bf2e')
    line(this.x + 10, height - this.bottom + 2, this.x + 10, height)
    fill('#558022')
    noStroke()
    rect(
      this.x + this.width - 20,
      height - this.bottom + pipeBorderWidth,
      this.width / 3 - 10,
      this.bottom + pipeBorderWidth
    )
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
