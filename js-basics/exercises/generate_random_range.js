function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
}

console.log(randomRange(0, 9))
