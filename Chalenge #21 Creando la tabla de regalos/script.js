const obj = [
    { name: 'Game', quantity: 1234567890 },
    { name: 'Chocolates', quantity: 1340}
]


function printTable(gifts){
  let longestString = 'Gift'.length
  let longestNumber = 'Quantity'.length
  let top = '+'
  let bottom = '*'
  let print = ''

  // Check longest string & number
  if(gifts.length > 1){
    for (let i = 0; i < gifts.length - 1; i++) {
      const currentName = gifts[i].name.length;
      const nextName = gifts[i + 1].name.length;
      const currentQ = gifts[i].quantity.toString().length;
      const nextQ = gifts[i + 1].quantity.toString().length;
  
      // Check the longest string 
      if (longestString <= currentName){
        longestString = currentName
        if (currentName <= nextName){
          longestString = nextName
        }else if(currentName > nextName){
          longestString = currentName
        }
      }else if (longestString <= nextName){
        longestString = nextName
      }
      // Check the longest number
      if (longestNumber <= currentQ){
        longestNumber = currentQ
        if (currentQ <= nextQ){
          longestNumber = nextQ
        }
      }else if (longestNumber < nextQ){
        longestNumber = nextQ
      }
    }
  }else{
    if(gifts[0].name.length > longestString){
      longestString = gifts[0].name.length
    }
    if(gifts[0].quantity.toString().length > longestNumber){
      longestNumber = gifts[0].quantity.toString().length
    }
  }

  print += `++++${top.repeat(longestString + longestNumber)}+++\n`
  print += `| Gift${' '.repeat(longestString - 'Gift'.length)} | Quantity${' '.repeat(longestNumber - 'Quantity'.length)} |\n`
  print += `| ${'-'.repeat(longestString)} | ${'-'.repeat(longestNumber)} |\n`

  gifts.forEach(element => {
    let name = element.name;
    let number = element.quantity;
    print += `| ${name}${' '.repeat(longestString - name.length)} | ${number}${' '.repeat(longestNumber - number.toString().length)} |\n`    
  });
  print += `****${bottom.repeat(longestString + longestNumber)}***`
  
  return print
}
// exprected:
/* 
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
*/
console.log(printTable(obj))