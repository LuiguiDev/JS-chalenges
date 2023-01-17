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

console.log(check('hannahz'))