// Reverse the order of a given text
function reverseText(text) {
  text = text.split('')
  let reversed = []
  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    
    reversed.unshift(character)
  }
  console.log(reversed.join(''))
}
reverseText('Hola mundo') // Expected: 'odnum aloH'