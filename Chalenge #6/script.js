const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
  const sortedGiftscities = giftsCities.sort((a, b) => b - a)
  let count = 0
  while (count <= maxGifts) {
    for (let i = 0; i < sortedGiftscities.length; i++) {
      count += array[i];
    }
  }
}


