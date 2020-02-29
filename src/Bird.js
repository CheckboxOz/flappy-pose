class Bird {
  constructor() {
    this.x = 64
    this.y = height / 2
    this.width = 32

    this.gravity = 0.75
    this.lift = -18
    this.velocity = 0
  }

  draw() {
    fill(255)
    ellipse(this.x, this.y, this.width, this.width)
  }

  flap() {
    this.velocity += this.lift
  }

  update() {
    this.velocity += this.gravity
    this.y += this.velocity

    if (this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
    if (this.y > height) {
      this.y = height
      this.velocity = 0
    }

    this.draw()
  }
}
