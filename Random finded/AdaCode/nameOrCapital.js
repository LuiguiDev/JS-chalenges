function nameOrCapital (capital) {
  const names = ['Berlín', 'Tokio', 'Moscú', 'CDMX']

  if(names.some(name => name === capital)) {
    return 'Es miembro del equipo'
  }else {
    return 'Es una capital'
  }
}

//console.log(nameOrCapital('CDMX'))

// Chanlenge #2

const form = document.getElementById('plankForm')
form.addEventListener('submit', (e) => {isPlankConstant(e)})


function isPlankConstant (e) {
  e.preventDefault()

  const plankConstant = 6.62607015
  const container = document.querySelector('.result')
  let result = false
  const number = parseFloat(e.target[0].value)
  
  if(number === plankConstant) result = true

  container.textContent = result
}

// Chanlenge #3
function sumAndSus (array) {
  let boarded = 0
  let getOff = 0
  
  for (let subArray = 0; subArray < array.length; subArray++) {
    const newPassengers = array[subArray][0];
    const exPassengers = array[subArray][1]

    boarded += newPassengers    
    getOff += exPassengers
  }

  const getToTheEnd = boarded - getOff

  if(getToTheEnd === 0) {
    console.log('Todos los pasajeros bajaron antes de llegar al final')
  }else if (getToTheEnd === 1) {
    console.log('Solo un pasajero llegó al final del trayecto')
  }else if (getToTheEnd > 1) {
    console.log(`El número de pasajeros que llegaron al final del trayecto fue de ${getToTheEnd} usuarios`)
  }else {
    console.log('Bajaron más pasajeros de los que subieron ._.')
  }
}

//sumAndSus([[1,0], [2, 1], [5, 10]])

// Chalenge #4

function rgb (R, G, B) {
  return `#${decimalToHexa(R)}${decimalToHexa(G)}${decimalToHexa(B)}`
}

function decimalToHexa (value) {
  if (value < 0) return '00'
  if (value > 255) return 'FF'

  const hexaCaraters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let firstDigit = ''
  let secondDigit = ''
  let hexadecimal = '' // firstDigit + secondDigit

  if (value >= 16) {
    let remainder = 0

    remainder = value % 16
    firstDigit = hexaCaraters[remainder]
    secondDigit = parseInt(value / 16)
    hexadecimal = secondDigit + firstDigit

    return hexadecimal
  }else {
    return `0${hexaCaraters[value]}`
  }
}

console.log(rgb(13, 55, 100))