const a1 = ['bici', 'coche', 'bici', 'bici', 'newGift']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

function getGiftsToReFill (a1, a2, a3) {
  let reFill = []
  a1.forEach(gift => {
    let giftTofind = gift;
    const foundInA2 = a2.find(elemet => elemet === giftTofind);
    const foundInA3 = a3.find(elemet => elemet === giftTofind);

    if(!foundInA2 && !foundInA3){
      reFill.push(gift);
    }
  });
  a2.forEach(gift => {
    let giftTofind = gift;
    const foundInA1 = a1.find(elemet => elemet === giftTofind);
    const foundInA3 = a3.find(elemet => elemet === giftTofind);

    if(!foundInA1 && !foundInA3){
      reFill.push(gift);
    }
  });
  a3.forEach(gift =>{
    let giftTofind = gift;
    const foundInA1 = a1.find(elemet => elemet === giftTofind);
    const foundInA2 = a2.find(elemet => elemet === giftTofind);

    if(!foundInA1 && !foundInA2){
      reFill.push(gift);
    }
  });

  const uniqueGifts = [...new Set(reFill)]
  return uniqueGifts
}

let giftsToReFill = getGiftsToReFill(a1, a2, a3)
console.log(giftsToReFill)