function Const (thing) {
  return function () {
    return thing
  }
}

module.exports = Const
