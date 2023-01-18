// Sleighs are sorted from low to highest quality, return the best sleigh that can run the distance. If there are none, return null

const distance = 10
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
] // Expected => Dancer
const sleighs2 = [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 5 }
] // Expected => Pedrosillano
const sleighs3 = [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
]  // Expected => null

function selectSleigh(distance, sleighs) {
  const battery = 20
  let canWalkWay = []
  let theOne

  // Check which sleighs can walk the way
  for (let i = 0; i < sleighs.length; i++) {
    const element = sleighs[i];
    const consumption = element.consumption * distance
    
    if(consumption <= battery){
      canWalkWay.push(element)
    }
    console.log(consumption)
  }
  let last = canWalkWay.length - 1
  // Check which sleigh is the best
  if(canWalkWay.length != 0){
    theOne = canWalkWay[last].name
  }else{
    theOne = null
  }

  return theOne
}

console.log(selectSleigh(distance, sleighs3))