const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 5, 1, 0]

function sortToys(toys, positions) {
  let sorted = []
  for(let i = 0; i < positions.length; i++){
    sorted[positions[i]] = toys[i]
  }
  return sorted.filter((element) => {
    return element
  })
}