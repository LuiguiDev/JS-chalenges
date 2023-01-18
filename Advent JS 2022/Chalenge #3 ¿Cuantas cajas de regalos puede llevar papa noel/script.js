const packOfGifts = ["book", "doll", "ball"] // 12
const reindeers = ["dasher", "dancer", "hellokitty"] // 24

function distributeGifts (packOfGifts, reindeers){
  let cargo = 0;
  let cargoCapability = 0;
  let deliverCapability = 0;

  packOfGifts.forEach(gift => {
    cargo += gift.length
  });
  reindeers.forEach(reindeer => {
    cargoCapability += reindeer.length * 2
  });
  
  deliverCapability = Math.floor(cargoCapability / cargo);
  return deliverCapability
}

distributeGifts(packOfGifts, reindeers)