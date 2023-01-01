const obj = [
    { name: 'Game', quantity: 1234567890 },
    { name: 'Chocolates', quantity: 1340}
]


function printTable(gifts){
  let longestString = 'Gift'.length;
  let longestNumber = 'Quantity'.length;

  function createTable (gifts){
    const decoration = `| ${'-'.repeat(longestString)} | ${'-'.repeat(longestNumber)} |\n`
    const totalWidth = longestString + longestNumber + 7;

    function createRows (left, right) {
      const giftsRows = `${left}${' '.repeat(longestString - left.length)}`
      const quantityRows = `${right}${' '.repeat(longestNumber - right.toString().length)}`

      return `| ${giftsRows} | ${quantityRows} |\n`
    };

    const top = `${'+'.repeat(totalWidth)}\n`;
    const titles = `${createRows('Gift', 'Quantity')}${decoration}`
    let content = ''
    const bottom = `${'*'.repeat(totalWidth)}`;

    if(gifts != 'empty'){
      gifts.forEach(element => {
        content += createRows(element.name, element.quantity);
      })
    }else{
      content = `| ${' '.repeat(longestString)} | ${' '.repeat(longestNumber)} |`
    }

    return `${top}${titles}${content}${bottom}` 
  }
  // Check longest string & number
  if(gifts.length > 1){
    for (let i = 0; i < gifts.length - 1; i++) {
      const currentName = gifts[i].name.length;
      const nextName = gifts[i + 1].name.length;
      const currentNumber = gifts[i].quantity.toString().length;
      const nextNumber = gifts[i + 1].quantity.toString().length;

      if (longestString < currentName){
        longestString = currentName;
        if (currentName < nextName) longestString = nextName;
      }else if (longestString < nextName) longestString = nextName;
      // Check the longest number
      if (longestNumber < currentNumber){
        longestNumber = currentNumber
        if (currentNumber <= nextNumber) longestNumber = nextNumber;
      }else if (longestNumber < nextNumber) longestNumber = nextNumber;
    }
    return createTable(gifts);
  }else if(gifts.length === 1) {
    const currentName = gifts[0].name.length;
    const currentNumber = gifts[0].quantity.toString().length;

    if(currentName > longestString) longestString = currentName;
    if(currentNumber > longestNumber) longestNumber = currentNumber;

    return createTable(gifts)
  }else{
    return createTable('empty');
  }
}

console.log(printTable([
  { name: 'Toy', quantity: 12 },
  { name: 'Mic', quantity: 123 }
]))