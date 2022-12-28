const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 4, h: 1 }
];
/* const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
] */

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

let state = fitsInOneBox(boxes)
console.log(state)