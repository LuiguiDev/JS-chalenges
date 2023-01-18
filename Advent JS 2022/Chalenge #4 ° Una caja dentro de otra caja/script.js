const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 4, h: 1 }
];  
const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

function fitsInOneBox(boxes) {
  let boxesSotrted = []
  let status;
  // Code to sorted boxes from smaller to bigger
  for(let i = 0; i < boxes.length; i++) {    
    if(boxes[i].l >= boxes[i + 1].l && boxes[i].w >= boxes[i + 1].w && boxes[i].h >= boxes[i + 1].h) {
      boxesSotrted[i] = boxes[i]
    }else{
      boxesSotrted.push(boxes[i])
    }
    console.log(boxesSotrted)
  }
  for(let i = 0; i< boxes.length; i++) {
    if(boxes[i].l <= boxes[i + 1].l && boxes[i].w <= boxes[i + 1].w && boxes[i].h <= boxes[i + 1].h) {
      status = true;
    }else{
      status = false;
      break;
    }
  }

  return status
}

function fits(boxes) {
  let status
  let sorted = boxes.sort((a, b) => a.w - b.w)

  for (let i = 0; i < sorted.length - 1; i++) {
    const length = sorted[i]['l'];
    const heigth = sorted[i]['h'];
    const nextL = sorted[i + 1]['l']
    const nextH = sorted[i + 1]['h']
    
    if(length >= nextL || heigth >= nextH){
      status = false
      break;
    }else{
      status = true
    }
  }

  return status
}
let result = fits(boxes)
console.log(result)