function Thunk (thing) {
  return function () {
    return thing
  }
}

module.exports = Thunk
