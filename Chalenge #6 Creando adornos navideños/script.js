const core = '/\\_\\\n\\/_/'
const edge = ' \\ \\'
const faceCorner1 = '/\\_\\\n\\'

const line = '/\\_\\_\\_\\'
const line2 = '\\/\\_\\_\\_\\'


const corner1 = '/\\_'
const L = '\\_'
const Lreverse = '_/'
const end = '\\'
const lowerEnd = '/'
const A = '/\\'
const V = '\\/'
const blank = ' '

console.log(`${line} \n${line2}`)
function createLines(size) {
  let line1 = ''
  let line2 = ''
  let line3 = ''
  if(size === 1){
    return '/\\_\\\n\\/_/'
  }else{
    line1 = `${blank.repeat(size - 1)}${corner1}${L.repeat(size - 1)}${end}`;
    line2 = `${blank.repeat(size - 2)}${A.repeat(2)}_${L.repeat(size - 1)}${end}` 
    line3 = `${A.repeat(size)}_${L.repeat(size -1)}${end}`

    return `${line1}\n${line2}\n${line3}`
  }
}
function createCube(size) {
  let lines = [];
  let upperHalf = ''
  let lowerHalf = ''
  for(let i = 1; i <= size; i++) {
    lines.push(i);
  }
  let linesR = lines.slice().reverse()

  for(let i = 0; i < size; i++) {
    upperHalf += `${' '.repeat(linesR[i] - 1)}${'/\\'.repeat(i + 1)}_${'\\_'.repeat(size - 1)}${'\\'}\n`
  }
  console.log(lines)
  for(let i = 0; i < size; i ++){
    lowerHalf += `${' '.repeat(i)}${'\\/'.repeat(linesR[i])}${'_/'.repeat(size)}\n`
  }

  return `${upperHalf}${lowerHalf}\n`
}

let printLine = createCube(3)
console.log(printLine) 

L.trim()