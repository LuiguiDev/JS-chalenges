function carryGifts(toys, maxWeight) {
  let cargo = [];
  let pack = ['', 0];

  for (let i = 0; i < toys.length; i++) {
    const toy = toys[i];
    
    if(toy.length + pack[1] <= maxWeight){
      pack[0] += `${toy} `;
      pack[1] += toy.length;
    }else if(toy.length <= maxWeight){
      cargo.push(pack[0].trimEnd())
      pack = [`${toy} `, toy.length]
    }
  }
  if(pack[1] <= maxWeight) cargo.push(pack[0].trimEnd())
  if(pack[0] != ''){
    return cargo
  }else{
    return []
  }
}

console.log(carryGifts(['game', 'bike', 'book', 'toy', 'toy', 'coatl', 'tototl'], 30))

