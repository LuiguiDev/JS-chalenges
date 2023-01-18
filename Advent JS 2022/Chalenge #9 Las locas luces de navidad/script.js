let leds = [0, 1, 1, 0, 1] // 7
let leds2 = [0, 0, 0, 1] // 21
let leds3 = [0, 0, 1, 0, 0] // 28
let zeros = [];

function countTime(leds) {
  let count = 0;
  let zeros = [];

  while(leds.some(element => element === 0)){
    leds.find((number, index) => {
      if(number === 0 && leds[index - 1] === 1){
        zeros.push(index)
      }else if(leds[0] === 0 && leds[leds.length - 1] === 1){
        zeros.push(0)
      }
    })

    let nonDuplicate = [...new Set(zeros)]
    console.log(nonDuplicate)
    for (let i = 0; i < nonDuplicate.length; i++) {
      const index = nonDuplicate[i];
      
      leds[index] = 1;
    }
    count += 7
  }
  return count
}
console.log(countTime(leds))