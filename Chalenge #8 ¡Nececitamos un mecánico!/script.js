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

console.log(checkPart('dhannahdd'))