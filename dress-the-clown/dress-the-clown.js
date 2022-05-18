// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// push side arrow keys to change outfit
// push up and down arrow keys to change body parts

//calling the up, down, left and right handlers. Using this piece of code here.
// Each key on a keyboard has a keycode and in these four keys we have (37 left, 38 up, 39 right and down 40) to play with.
// I have put in the switch staments to select one of 4 code blocks to be executed.
//(If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.)

document.onkeydown = checkKey

function checkKey(event) {
  switch (event.keyCode) {
    case 37:
      alert('left')
      changeHorizontal(-1)
      console.log('Hello')
      break
    case 38:
      alert('up')
      changeVertical(-1)
      break
    case 39:
      alert('right')
      changeHorizontal(1)
      break
    case 40:
      alert('down')
      changeVertical(1)
      break
  }
  console.log(event)
}

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let trueIndex = 0

// creating a function for the left and right keys, Left equals a negative 1 and right equals positive 1.
// adding images of the head body and shoes, using the src img tag to refences img from the img folder.

function changeHorizontal(shift) {
  if (trueIndex == 0) {
    headIndex += shift
    if (headIndex < 0) headIndex = 5
    if (headIndex > 5) headIndex = 0
    head.src = './images/head' + headIndex + '.png'
  }
  if (trueIndex == 1) {
    bodyIndex += shift
    if (bodyIndex < 0) bodyIndex = 5
    if (bodyIndex > 5) bodyIndex = 0
    body.src = './images/body' + bodyIndex + '.png'
  }
  if (trueIndex == 2) {
    shoesIndex += shift
    if (shoesIndex < 0) shoesIndex = 5
    if (shoesIndex > 5) shoesIndex = 0
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

//creating the up and down keys
function changeVertical(shift) {
  trueIndex += shift
  console.log(trueIndex)
  if (trueIndex < 0) trueIndex = 2
  if (trueIndex > 2) trueIndex = 0
}
