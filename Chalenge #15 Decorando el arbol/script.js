/* 
Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R 
*/
let base = 'B B P R P R R'

function decorateTree (base){
  const cases = {
    PP: 'P',
    BP: 'R',
    RP: 'B',
    BR: 'P', 
  }
  let arr = [base]
  let result = ''

  function loop (newBase){
    result = ''
    for (let i = 0; i < newBase.length - 1; i++) {
      const current = newBase[i];
      const next = newBase[i + 2];
  
      if(current != ' '){
        if(current === next){
          result += `${current} `
        }else{
          let r = cases[current + next] || cases[next + current] || ''
          result += `${r} `
        }
      }
    }
    result = result.trimEnd()
    arr.push(result)
    if(result.length > 2){
      loop(result)
    }
  
  }

  loop(base);
  console.log(arr)
}

decorateTree(base)