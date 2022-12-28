const systemNames = ["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"]
const stepNumbers = [5, 2, 1, 2, 3, 4, 5, 6]

function checkStepNumbers(systemNames, stepNumbers) {
  let status = true
  let indexList = [];

  systemNames.map(x => {  
    let step = []

    for (let i = 0; i < systemNames.length; i++) {
      const index = systemNames.indexOf(x, i);
      indexList[i] = index;
    }
    const newList = [...new Set(indexList)].filter(x => x != -1)
    for (let i = 0; i < newList.length; i++){
      const s = stepNumbers[newList[i]]
      step.push(s)
    }
    console.log(step)
    for (let i = 0; i < step.length - 1; i++) {
      if(step[i] <= step[i + 1]){
        return status
      }else{
        status = false
      }
    }
  })

  return status
};

console.log(checkStepNumbers(systemNames, stepNumbers))