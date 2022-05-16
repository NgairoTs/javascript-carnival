// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// Hanga taurangi Hoiho, create Variable unicorn.
// Tikina enei taurangi tono, get variable by id
let unicorn = ('unicorn0', 'unicorn1', 'unicorn2')
unicorn0 = document.getElementById('unicorn0')
unicorn1 = document.getElementById('unicorn1')
unicorn2 = document.getElementById('unicorn2')

//Hanga taurangi kōeke, kore kite te rua. create variables for inflations [0-2]
let level0 = 0
let level1 = 0
let level2 = 0
let inflationlevels = [level0, level1, level2]

// Hanga he pāwhiri, create .onclicks
unicorn0.onclick = clicked
unicorn1.onclick = clicked
unicorn2.onclick = clicked

// me mohio ko tehea hōiho e pāwhiri  ana, I want to know which unicorn has been clicked.
function clicked(event) {
  let unicorn = event.target

  // tipu te whakamakoha kōeke, increase its inflation levels.
  // Tini i te pikitia ki te whakahua hou. change the src of the img to the new img
  if (unicorn.id == 'unicorn0') {
    inflationlevels[0]++

    if (inflationlevels[0] == 4) inflationlevels[0] = 0

    unicorn.src = 'images/unicorn-' + inflationlevels[0] + '.png'
  }
  if (unicorn.id == 'unicorn1') {
    inflationlevels[1]++

    if (inflationlevels[1] == 4) inflationlevels[1] = 0

    unicorn.src = 'images/unicorn-' + inflationlevels[1] + '.png'
  }

  if (unicorn.id == 'unicorn2') {
    inflationlevels[2]++

    if (inflationlevels[2] == 4) inflationlevels[2] = 0

    unicorn.src = 'images/unicorn-' + inflationlevels[2] + '.png'
  }
}
console.log(unicorn0.onclick)
