function fixLetter(letter) {
  let letterFixed = letter.trim().split('')
  
  for (let i = 0; i < letterFixed.length; i++) {
    let current = letterFixed[i];
    let next = letterFixed[i + 1];
    let previous = letterFixed[i - 1]

    if(i === 0){
      letterFixed[0] = letterFixed[0].toUpperCase()
    }else if(!next){
      letterFixed[] = '.'
    }
  };

  console.log(letterFixed);
}
fixLetter('  hi,  santa')
