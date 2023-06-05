function checkPart(part) {
  let compare = part
  let status

  for (let i = 0; i < compare.length; i++) {
    let character = compare[i];
    let mirror = (compare.length - 1) - i;
    
    if(character === compare[mirror]){
      status = true
    }else{
      const newpart = compare.replace(character, '');
      const newpart2 = compare.replace(compare[mirror], '')
      console.log(newpart, newpart2)
      for(let x = 0; x < newpart.length; x++){
        let newcharacter = newpart[x];
        let newmirror = (newpart.length - 1) - x;
        let newcharacter2 = newpart2[x]
  
        if(newcharacter === newpart[newmirror]){
          compare = newpart
          status = true
        }else if(newcharacter2 === newpart2[newmirror]){
          compare = newpart2
          status = true
        }
        else{
          status = false
          break
        }
      }
    }
  }
  return status
}

function check(part) {
  const reverse = part.split('').reverse().join('');
  const partArr = part.split('');
  const reverseArr = reverse.split('')
  let different

  for (let i = 0; i < partArr.length; i++) {
    if(i < partArr.length / 2){
      const index = partArr.findIndex((element, index) => {
        return element != reverseArr[index]
      })
      if(index != -1) different = partArr[index]
      console.log(different)
    }else{
      const indexS = reverseArr.findIndex((element, index) => {
        return element != partArr[index]
      })
      if(indexS != -1) different = reverseArr[indexS]
    }
  }
  return different
}

function third (part) {
  if (part.length <= 1) return true;

  const partCopy = part.split('').reverse().join('')

  if (partCopy === part) return true

  if (part.length <= 2) {
    return false
  }else {
    let result 
    for (let i = 0; i < part.length; i++) {
      const character = partCopy[i]
  
      if (character != part[i]) {
        let test1 = partCopy.split(character).join('')
        let test2 = part.split(part[i]).join('')
  
        if (test1 === test1.split('').reverse().join('')) {
          result = true
        }else if (test2 === test2.split('').reverse().join('')){
          result = true
        } else {
          result = false
        }
      } 
    }
    return result
  }
}

const result = third('non')
console.log(result)
