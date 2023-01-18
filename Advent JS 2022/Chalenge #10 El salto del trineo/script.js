const heights = [1, 2, 3, 2] // true
const heights2 = [2, 2, 2, 2] // false

function checkJump(heights) {
  let status = false
  let higher

  // Set the jump's higher height
  for (let i = 0; i < heights.length - 2; i++) {
    const element = heights[i];
    const next = heights[i + 1];

    if(element < next || element === next){
      higher = heights.indexOf(next);
    }else{
      break
    }
  }
  // Check if steps before higher point are upward
  for (let i = 0; i < higher; i++) {
    const current = heights[i];
    const next = heights[i + 1]
    if(current < next || current === next){
      status = true
    }else{
      status = false
    }
  }
  // Check if steps after higher point are falling
  if(status){
    for (let i = higher; i < heights.length - 1; i++) {
      const current = heights[i];
      const next = heights[i + 1]

      if(current > next || current === next){
        status = true
      }else{
        status = false
        break
      }
    }
  }

  return status
}

console.log(checkJump(heights2))