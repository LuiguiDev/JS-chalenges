const systemNames = ["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"]
const stepNumbers = [5, 2, 1, 2, 3, 4, 5, 6]

function chackStepNumbers(systemNames, stepNumbers){
  let obj = {};
  
  systemNames.forEach((name, index) => {
    if(Array.isArray(obj[name])){
      obj[name].push(stepNumbers[index])
    }else{
      obj[name] = [stepNumbers[index]]
    }
    console.log(obj)
  })
  for (let i = 0; i < systemNames.length; i++) {
    const element = systemNames[i];
    const array = obj[element]
    
    if(array.length > 1){
      for (let i = 0; i < array.length - 1; i++) {
        const element = array[i];
        
        if(array[i] < array[i + 1]){
          return true
        }else{
          return false
        }
      }
    }else{
      return true
    }
  }  
}

console.log(chackStepNumbers(systemNames, stepNumbers))