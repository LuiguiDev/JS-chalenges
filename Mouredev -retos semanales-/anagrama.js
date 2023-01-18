// Dificuldad: Media;
// Desarrolla un script que, dadas 2 palabras, determine si son un anagrama
function esAnagrama(wordOne, wordTwo) {
  if(wordOne === wordTwo){
    return false
  }else{
    const wordOneSorted = wordOne.split('').sort()
    const wordTwoSorted = wordTwo.split('').sort()

    let result = wordOneSorted.every((character, index) => {
      return character === wordTwoSorted[index]
    })

    return result
  }
}

console.log(esAnagrama('roma', 'roma'))