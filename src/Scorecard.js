class Scorecard {
  constructor() {
    this.frames = []
  }

  getFrame(n) {
    return this.frames[n]
  }

  getLastFrame() {
    return this.frames[this.frames.length - 1]
  }

  roll(n) {
    var currentFrame = this.frames[this.frames.length - 1]
    if (this.frames.length == 0 || currentFrame.isComplete()) {
      currentFrame = new Frame
      this.add(currentFrame)
    }
    currentFrame.roll(n)
  }

  add(frame) {
    frame.setNumber(this.frames.length + 1)
    this.frames.push(frame)
  }

  score() {
    var total = 0
    for (var i = 0; i < this.frames.length; i++) {
      total += this.frames[i].score(this.frames[i + 1], this.frames[i + 2])
    }
    return total
  }
}