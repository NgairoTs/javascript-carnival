// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//get a radom cell
// mole appers in radom cell,
// click on the mole
// mole appears in another cell

// In this first variable we are calling the 'TD' cells from our html index
let cells = document.getElementsByTagName('TD')

// calling the 'mole' to appear in diffent cells from 0 to the amount of cells there are (25)
// If this was a fixed amount of cells, we could change the length to equeal 25 because we have 25 cells.
let randomIndex = Math.floor(Math.random() * cells.length)

// we are creating a variable cells and calling it [randomIndex] So the 'mole' will appear in diffent cells
let randomCell = cells[randomIndex]

//Using the img src from our PNG file to add to our js file
let mole = document.createElement('img')

mole.src = './mole.PNG'
mole.id = 'mole'

//This stops the img appearing in every cell because it can only be in one part of the document at a time. So if the node already has a parent. Before it appears in a new cells it first has be leave it's current position
randomCell.appendChild(mole)

//Creating a click for the 'mole'
mole.onclick = whackMole

//making a function for the onclick method and adding all the necessary variables.
function whackMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  // This html element is calling the audio from the 'whack-audio.wav' file to enable the sound effect when the mole has been whacked.
  let audio = new Audio('./whack-audio.wav')
  audio.play()
}
