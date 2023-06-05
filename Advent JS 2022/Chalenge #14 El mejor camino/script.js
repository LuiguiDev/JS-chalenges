 let roads = [
      [1],
    [5, 1],
  [0, 5, 8],
 [0, 4, 1, 3],
[0, 2, 5, 7, 8]]

function shorterWay(roads) {
  let smallest = roads[0][0]
  let find = 0
  let count = smallest

  for (let i = 0; i < roads.length - 1; i++) {
    const level = roads[i];
    const nextLevel = roads[i + 1];
  
    let below1 = nextLevel[find]
    let below2 = nextLevel[find + 1]
  
    console.log(`Comparing: ${below1} & ${below2} Index: ${find}`)
    if(below1 < below2){
      smallest = below1
      find = nextLevel.indexOf(below1)
      count += below1
    }else{
      smallest = below2
      find = nextLevel.indexOf(below2)
      count += below2
    }
    console.log(`Won: ${smallest}`)
  }
  console.log(`Result: ${count}`)
}

function optimalPath(roads) {
  let pathsF = [];
  let pathsS = []
  let sumF = 0;
  let sumS = 0;

  for (let i = 0; i < roads.length; i++) {
    const current = roads[i];
    const secondHalf = current.slice(current.length / 2)
    pathsS.push(secondHalf)  
    console.log(secondHalf)
  }
  pathsS.flat().forEach(value => {
    sumS += value
  })
  console.log(sumS)
  console.log('first half:')
  for (let i = 0; i < roads.length; i++) {
    const current = roads[i];
    const firstHalf = current.slice(0, (current.length + 1) / 2)
    
    pathsF.push(firstHalf)
  }
  pathsF.flat().forEach(value => {
    sumF += value
  })
  console.log(sumF)

  let shortest = Math.min(sumF, sumS)
  console.log(`The shortest way is ${shortest}`)
}
function anotherTry(roads) {
  roads.forEach(level => {
    console.log(level)
  })
}
anotherTry(roads)